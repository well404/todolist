import { useState, useRef, useEffect, useMemo } from 'react'
import { LoadingContainer } from './style'

const useLoading = () => {

    const [loading, setLoading] = useState(true)
    const loadingRef = useRef()

    useEffect(() => {
        if (loading) return

        let timeOut = setTimeout(() => {
            loadingRef.current?.classList.add('out')
        })

        return () => {
            clearTimeout(timeOut)
        }
    }, [loading])

    const Loading = () => {

        return (

            <LoadingContainer ref={loadingRef} >
                <div className="spinner">
                    <div>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                </div>
            </LoadingContainer>
        )
    }

    return useMemo(() => {
        return {
            Loading: Loading,
            isLoading: setLoading,
            active: loading
        }
    }, [loading])


}

export default useLoading
import { useState, useRef, useEffect, memo, useMemo, useCallback } from 'react'
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
    }, [])

    const Loading = () => {

        return (

            <LoadingContainer ref={loadingRef} >
                <div className="spinner">
                    <div >
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                </div>
            </LoadingContainer>
        )
    }

    return useMemo(() => {
        return {
            Loading: Loading,
            isLoading: setLoading
        }
    }, [loading])


}

export default useLoading
import React, {useEffect, useState} from "react";


export default function WithLoading(Component: React.FC) {
  return function ComponentWithLoading() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 3000)

      return () => {
        clearTimeout();
      }
    },[])

    return (
      <>
        {loading
          ? <div className={'loading'}> ...Loading!!! </div>
          : <Component />
        }
      </>
    )
  }
}
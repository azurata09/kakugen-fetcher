import { useEffect, useState } from 'preact/hooks'
import axios from 'axios'

export function App() {
  const [kakugen, setKakugen] = useState('');
  const BASE_URL = 'https://script.google.com/macros/s/AKfycbzQU6p4jcri6bajDRg_lsGWKS_pcL2tE3nWbHHCWH1_pFzsx7bAB_U2qTryaj9FwQKd/exec'

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setKakugen(response.data);
    })
  });

  return (
    <>
      <p>{kakugen}</p>
    </>
  )
}

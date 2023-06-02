//Đây là file chứa toàn bộ các pages
//Để cho cả navbar và footer xuất hiện thì dùng layout rồi khai báo trong file này
import Layout from '@/components/Layout'
import '@/styles/globals.css' //->file css cho index

export default function App({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}

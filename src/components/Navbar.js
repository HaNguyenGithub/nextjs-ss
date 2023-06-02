import Link from "next/link"
export default function Navbar() {
    return(
        <div className="nav">
             <h5>Navbars</h5>
            <Link href='/users'><h6>Users</h6></Link>
            <Link href='/accounts'><h7>Acounts</h7></Link>     
        </div>
           
    )
}
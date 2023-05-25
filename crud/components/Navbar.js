import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const user = null
    const username = null
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {username && (
                    <>
                    <li>
                    <Link href="/admin">Write Post</Link>
                    </li>
                    <li>
                    <Link href={`/${username}`}>UserProfile</Link>
                    </li>
                    </>
                )}
                {!username && (
                    <li>
                        <Link href="/enter">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
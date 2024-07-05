import Link from 'next/link'
import React from 'react'

function login() {
  return (
    <>
    
    <div>login</div>
    <Link href={"/registration"}>registration</Link>
    </>
  )
}

export default login
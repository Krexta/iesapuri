import * as React from 'react'
import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react'

// import './style/global.css'

const Head = () => {
  return (
    <head>
      <Meta />
      <Links />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap"
        rel="stylesheet"
      />
      <link href="/favicon.ico" rel="icon" />
    </head>
  )
}

export const links: LinksFunction = () => {
  return [
    // { rel: 'stylesheet', href: stylesheet },
  ]
}

export const clientLoader = () => {
  return null
}

const Document: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
      <html>
        <Head />
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    )
}
const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}
export default App

export const ErrorBoundary = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <Document>
      <Scripts />
    </Document>
  )
}

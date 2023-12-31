import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

const loraFont = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Storify',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={loraFont.className}>{children}</body>
		</html>
	)
}

import { PrismaClient } from '@prisma/client'
import styles from './page.module.css'
import Image from 'next/image'

export default async function Article({ params }: { params: { id: string } }) {
	const articleId = parseInt(params.id)

	const prisma = new PrismaClient()
	const article = await prisma.article.findUnique({
		where: {
			id: articleId,
		}
	})

	return (
		<div className={styles.article}>
			<h1>{article?.title}</h1>
			<div className={styles.header}>
				<Image src={article?.imageUrl ? article?.imageUrl : ''} alt='Article image' 
					width={2250}
					height={1390}
					layout="responsive"
				>
				</Image>
			</div>
			<span className={styles.text}>{article?.body}</span>
		</div>
	)
}

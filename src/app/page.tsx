import { PrismaClient } from '@prisma/client'
import styles from './page.module.css'

export default async function Home() {
	const prisma = new PrismaClient()
	const firstArticle = await prisma.article.findFirst()
	const articles = await prisma.article.findMany({take: 7, skip: 1})

	return (
		<div>
			<header className={styles.header} backgroundImage>
				<div className={styles.info}>
					<span>Mais recente</span>
				</div>
				<h1>{firstArticle?.title}</h1>
			</header>
			<ul>
				{
					articles.map(post => (
						<li key={post.id}>{post.title}</li>
					))
				}
			</ul>
		</div>
	)
}

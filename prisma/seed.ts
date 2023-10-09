// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.article.upsert({
    where: { title: '' },
    update: {},
    create: {
		title: "A evolução da música: desde os primórdios até os dias atuais",
		body: `
		Título: A evolução da música: desde os primórdios até os dias atuais
		
		Introdução
		
		A música é uma das formas de arte mais antigas da humanidade. Ela está presente em todas as culturas e épocas, e tem sido usada para expressar emoções, contar histórias e celebrar eventos importantes.
		
		A evolução da música ao longo dos séculos foi marcada por uma série de mudanças, tanto na forma quanto no conteúdo. Essas mudanças foram influenciadas por fatores culturais, sociais e tecnológicos.
		
		Pré-história
		
		Os primeiros registros de música datam da pré-história, há cerca de 50.000 anos. Nessa época, os humanos já produziam sons musicais usando os próprios corpos, como batendo palmas, batendo os pés ou assobiando. Também começaram a usar instrumentos musicais simples, como flautas e tambores.
		
		Antiguidade
		
		Na antiguidade, a música continuou a se desenvolver. Os gregos e romanos desenvolveram sistemas de notação musical, que permitiram que a música fosse preservada e transmitida. Também surgiram novas formas musicais, como a ópera e a música sacra.
		
		Idade Média
		
		Na idade média, a música foi fortemente influenciada pela religião. A música sacra, como os hinos e as missas, era muito importante nessa época. Também surgiram novas formas musicais, como a música trovadoresca e a música medieval.
		
		Renascimento
		
		O renascimento foi um período de grande desenvolvimento cultural, e a música não ficou de fora. Nessa época, a música secular começou a ganhar importância, com o surgimento de novas formas, como a música renascentista e a música barroca.
		
		Idade Moderna
		
		Na idade moderna, a música continuou a se desenvolver em novas direções. O classicismo, o romantismo e o impressionismo foram alguns dos principais movimentos musicais dessa época.
		
		Século XX
		
		O século XX foi marcado por uma grande diversidade de estilos musicais. A música clássica continuou a se desenvolver, mas também surgiram novas formas, como a música jazz, a música popular e a música eletrônica.
		
		Século XXI
		
		O século XXI viu o surgimento de novas tecnologias que revolucionaram a música. A internet permitiu que a música fosse distribuída de forma rápida e fácil, e o surgimento de novos instrumentos e softwares musicais abriu novas possibilidades para os músicos.
		
		Conclusão
		
		A música é uma forma de arte viva e em constante evolução. As mudanças que ela sofreu ao longo dos séculos refletem as mudanças na sociedade e na cultura humana.
		
		Principais mudanças na evolução da música
		
		A introdução de instrumentos musicais: os primeiros instrumentos musicais eram simples, mas com o tempo eles se tornaram mais complexos e sofisticados.
		O desenvolvimento de sistemas de notação musical: a notação musical permitiu que a música fosse preservada e transmitida.
		O surgimento de novas formas musicais: a música evoluiu para incluir novas formas, como a ópera, a música sacra, a música secular, a música clássica, a música romântica, a música barroca, a música jazz, a música popular e a música eletrônica.
		A influência de fatores culturais, sociais e tecnológicos: a música é influenciada por fatores culturais, sociais e tecnológicos.
		Principais estilos musicais
		
		Música clássica: a música clássica é uma forma de música erudita que se originou na Europa.
		Música popular: a música popular é uma forma de música que é popular entre o público em geral.
		Música eletrônica: a música eletrônica é uma forma de música que usa instrumentos eletrônicos.
		Futuro da música
		
		É difícil prever o futuro da música, mas é certo que ela continuará a evoluir. As novas tecnologias, como a inteligência artificial e a realidade virtual, provavelmente terão um impacto significativo na música.`,
		description:
		  'Ele discute as principais mudanças na forma e no conteúdo da música, bem como os principais estilos musicais que surgiram ao longo do tempo.',
		published: true,
		imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	},
  });

  await prisma.article.upsert({
	where: { title: '' },
	update: {},
	create: {
		title: "QR Code: o que é, como funciona e como criar",
		body: `Introdução
	
		O QR Code, ou Quick Response Code, é um código de barras bidimensional que pode ser usado para armazenar uma grande quantidade de dados. Ele é composto por um conjunto de módulos pretos e brancos dispostos em uma matriz, que pode ser lida por um smartphone ou outro dispositivo com câmera.
		
		Os QR Codes são usados para uma variedade de propósitos, incluindo:
		
		Armazenar informações de contato, como endereços de e-mail, números de telefone e endereços de sites.
		Linkar para sites, vídeos e outros recursos online.
		Armazenar informações de produtos, como códigos de barras e números de série.
		Realizar pagamentos sem contato.
		Como funciona
		
		O QR Code é baseado em um algoritmo de codificação chamado Reed-Solomon. Este algoritmo divide os dados a serem armazenados em blocos, que são então codificados usando uma combinação de bits 0 e 1. Os blocos codificados são então organizados em uma matriz de módulos pretos e brancos.
		
		Para ler um QR Code, um dispositivo com câmera deve primeiro capturar uma imagem do código. Em seguida, o dispositivo deve usar um algoritmo de decodificação para converter os módulos pretos e brancos em bits 0 e 1. Os bits decodificados são então usados para reconstruir os dados armazenados no QR Code.
		
		Como criar
		
		Existem várias maneiras de criar um QR Code. Uma maneira é usar um gerador de QR Code online. Outra maneira é usar um aplicativo de smartphone para criar um QR Code.
		
		Para criar um QR Code usando um gerador de QR Code online, basta inserir os dados que deseja armazenar no código e clicar em "gerar". O gerador irá então gerar um QR Code que você pode baixar e usar.
		
		Para criar um QR Code usando um aplicativo de smartphone, basta abrir o aplicativo e selecionar o tipo de dados que deseja armazenar no código. Em seguida, insira os dados e toque em "criar". O aplicativo irá então gerar um QR Code que você pode visualizar na tela do seu smartphone.
		
		Conclusão
		
		Os QR Codes são uma ferramenta versátil que pode ser usada para uma variedade de propósitos. Eles são fáceis de criar e usar, e podem ser lidos por uma variedade de dispositivos.`,
		description:
		  'Em poucas palavras, QR Codes são códigos de barras bidimensionais que podem ser usados para armazenar uma grande quantidade de dados podendo ser usados guardar informações de contato, linkar para sites, realizar pagamentos sem contato e muito mais.',
		published: true,
		imageUrl: 'https://images.unsplash.com/photo-1595079676601-f1adf5be5dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	 },
 });

 await prisma.article.upsert({
	where: { title: '' },
	update: {},
	create: {
		title: "As novas descobertas sobre o universo",
		body: `O universo é um lugar vasto e misterioso, e os cientistas estão constantemente aprendendo mais sobre ele. Nos últimos anos, houve uma série de descobertas importantes que estão desafiando nossa compreensão do cosmos.
	
		Uma das descobertas mais significativas foi a do Telescópio Espacial James Webb. Lançado em 2021, o Webb é o telescópio mais poderoso já construído, e ele está nos permitindo ver o universo de uma forma nunca antes possível.
		
		Com o Webb, os cientistas foram capazes de observar galáxias que se formaram apenas 300 milhões de anos após o Big Bang. Essas galáxias são muito diferentes das que vemos hoje, e elas nos dão uma visão do início do universo.
		
		O Webb também está nos ajudando a aprender mais sobre a formação de estrelas e planetas. Ele já identificou dezenas de exoplanetas, e ele está nos ajudando a entender como esses planetas se formam e evoluem.
		
		Além do Webb, houve uma série de outras descobertas importantes sobre o universo nos últimos anos. Por exemplo, os cientistas descobriram que o universo está se expandindo mais rápido do que o esperado. Isso está levando a uma série de novas teorias sobre a natureza do cosmos.
		
		Outra descoberta importante foi a de um novo tipo de buraco negro. Esses buracos negros são chamados de buracos negros de massa estelar, e eles são muito menores do que os buracos negros supermassivos que conhecemos.
		
		Essas são apenas algumas das novas descobertas que estão sendo feitas sobre o universo. À medida que os cientistas continuam a estudar o cosmos, eles estão nos revelando segredos que nunca antes imaginávamos.
		
		O que essas descobertas significam para nós?
		
		Essas novas descobertas estão nos ajudando a entender melhor o lugar da humanidade no universo. Elas nos mostram que o universo é um lugar vasto e complexo, e que ainda há muito que não sabemos.
		
		Essas descobertas também estão nos ajudando a desenvolver novas tecnologias. Por exemplo, o Webb está sendo usado para desenvolver novos medicamentos e tratamentos médicos.
		
		As novas descobertas sobre o universo estão nos levando a uma era de descobertas e inovação. Elas estão nos ajudando a entender melhor o nosso lugar no cosmos, e elas estão nos preparando para o futuro.`,
		description:
		  'Descobertas recentes desafiam nossa compreensão do cosmos, revelando um universo vasto e misterioso, elas estão nos ajudando a entender melhor o nosso lugar no cosmos, e elas estão nos preparando para o futuro.',
		published: true,
		imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	 },
 });

 await prisma.article.upsert({
	where: { title: '' },
	update: {},
	create: {
		title: "A segurança cibernética: o que é e por que é importante",
		body: `Em um mundo cada vez mais digital, a segurança cibernética é uma questão essencial para indivíduos, empresas e governos. Com o aumento da conectividade e da dependência de tecnologias digitais, os ataques cibernéticos estão se tornando cada vez mais comuns e sofisticados.
	
		O que é segurança cibernética?
		
		A segurança cibernética é o processo de proteger sistemas, redes e dados contra acessos não autorizados, uso indevido, divulgação, alteração ou destruição. Ela se concentra em proteger ativos digitais, como informações pessoais, financeiras e comerciais.
		
		Por que é importante?
		
		A segurança cibernética é importante por uma série de razões. Em primeiro lugar, ela protege a privacidade e a segurança dos indivíduos. Quando as informações pessoais são comprometidas, elas podem ser usadas para cometer crimes, como roubo de identidade ou fraude.
		
		Em segundo lugar, a segurança cibernética protege a propriedade intelectual e os segredos comerciais das empresas. Quando dados confidenciais são roubados, eles podem ser usados para dar uma vantagem competitiva aos concorrentes.
		
		Em terceiro lugar, a segurança cibernética protege a infraestrutura crítica dos governos. Quando sistemas críticos, como redes elétricas ou sistemas de transporte, são atacados, eles podem causar danos significativos à sociedade.
		
		Como manter-se seguro?
		
		Existem uma série de coisas que indivíduos, empresas e governos podem fazer para manter-se seguros ciberneticamente. Algumas das medidas mais importantes incluem:
		
		Usar senhas fortes e únicas: As senhas devem ser pelo menos 12 caracteres de comprimento e incluir uma combinação de letras, números e símbolos.
		Manter os softwares atualizados: Os softwares atualizados geralmente incluem patches de segurança que corrigem vulnerabilidades conhecidas.
		Ser cauteloso ao clicar em links e abrir anexos: Os links e anexos maliciosos podem conter malware que pode infectar seu sistema.
		Educar-se sobre segurança cibernética: É importante estar ciente das últimas ameaças cibernéticas e das melhores práticas de segurança.
		A segurança cibernética é um esforço contínuo. À medida que as ameaças cibernéticas evoluem, é importante estar ciente das últimas tendências e tomar medidas para proteger seus ativos digitais.`,
		description:
		  'A segurança cibernética é a proteção de sistemas, redes e dados contra acessos não autorizados, uso indevido, divulgação, alteração ou destruição. Ela é importante para indivíduos, empresas e governos, pois protege a privacidade, a propriedade intelectual e a infraestrutura crítica.',
		published: true,
		imageUrl: 'https://images.unsplash.com/photo-1602529710584-458a995c8785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	 },
 });

 await prisma.article.upsert({
	where: { title: '' },
	update: {},
	create: {
		title: "O futuro da educação: mais personalizado, mais acessível e mais centrado no aluno",
		body: `A educação está em constante evolução, e o futuro promete ser ainda mais transformador. As tecnologias emergentes, como a inteligência artificial, a realidade virtual e a realidade aumentada, estão redefinindo a forma como aprendemos.
	
		Mais personalizado
		
		No futuro, a educação será mais personalizada para atender às necessidades individuais de cada aluno. Os alunos poderão aprender no seu próprio ritmo e no seu próprio estilo. Os professores poderão usar dados e insights para fornecer feedback e orientação personalizados.
		
		Mais acessível
		
		A tecnologia também está tornando a educação mais acessível. Os alunos de todo o mundo poderão acessar recursos educacionais de alta qualidade, independentemente de sua localização ou situação socioeconômica.
		
		Mais centrado no aluno
		
		O futuro da educação será mais centrado no aluno. Os alunos serão incentivados a serem protagonistas de seu próprio aprendizado. Eles serão desafiados a pensar criticamente e a resolver problemas.
		
		Tendências que moldarão o futuro da educação
		
		Aqui estão algumas tendências que estão moldando o futuro da educação:
		
		Ensino híbrido: O ensino híbrido combina o ensino presencial com o ensino online. É uma forma de fornecer aos alunos flexibilidade e personalização.
		Aprendizagem baseada em projetos: A aprendizagem baseada em projetos é uma abordagem que envolve os alunos em projetos práticos e desafiadores. É uma forma de desenvolver habilidades de pensamento crítico e resolução de problemas.
		Aprendizagem experiencial: A aprendizagem experiencial envolve os alunos em atividades e experiências do mundo real. É uma forma de tornar o aprendizado mais relevante e envolvente.
		O que você pode fazer para se preparar para o futuro da educação
		
		Para se preparar para o futuro da educação, é importante:
		
		Ser um aprendiz ativo: Os alunos que são aprendizes ativos são mais propensos a ter sucesso no futuro. Eles são curiosos, questionadores e estão dispostos a sair da sua zona de conforto.
		Desenvolver habilidades de pensamento crítico e resolução de problemas: Essas habilidades são essenciais para o sucesso no mundo moderno. Os alunos podem desenvolver essas habilidades participando de atividades de aprendizagem baseada em projetos e aprendizagem experiencial.
		Ser proficiente em tecnologia: A tecnologia é uma ferramenta poderosa que pode ser usada para aprender. Os alunos devem estar familiarizados com uma variedade de tecnologias educacionais.
		O futuro da educação é brilhante. Com as tecnologias emergentes e as novas abordagens pedagógicas, os alunos têm a oportunidade de aprender de uma forma mais personalizada, acessível e centrada no aluno.`,
		description:
		  'A educação do futuro será mais personalizada, acessível e centrada no aluno. As tecnologias emergentes, como a inteligência artificial, a realidade virtual e a realidade aumentada, estão redefinindo a forma como aprendemos.',
		published: true,
		imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80'
	 },
 });

 await prisma.article.upsert({
	where: { title: '' },
	update: {},
	create: {
		title: "Como a energia nuclear pode nos ajudar",
		body: `A energia nuclear é uma fonte de energia limpa e eficiente que tem o potencial de nos ajudar a enfrentar alguns dos desafios mais urgentes do mundo, como a mudança climática e a pobreza.
	
		Vantagens da energia nuclear
		
		A energia nuclear tem uma série de vantagens em relação a outras fontes de energia, incluindo:
		
		É uma fonte de energia limpa: A energia nuclear não produz gases de efeito estufa ou outros poluentes.
		É uma fonte de energia eficiente: A energia nuclear pode gerar grandes quantidades de energia com um pequeno volume de combustível.
		É uma fonte de energia confiável: As usinas nucleares podem operar 24 horas por dia, 7 dias por semana, independentemente das condições climáticas.
		Como a energia nuclear pode nos ajudar
		
		A energia nuclear pode nos ajudar a enfrentar os seguintes desafios:
		
		Mudança climática: A energia nuclear pode ajudar a reduzir as emissões de gases de efeito estufa, contribuindo para a luta contra a mudança climática.
		Pobreza: A energia nuclear pode ajudar a fornecer energia a comunidades carentes, melhorando a qualidade de vida e as oportunidades econômicas.
		Desenvolvimento sustentável: A energia nuclear pode ajudar a promover o desenvolvimento sustentável, fornecendo energia limpa e eficiente para as necessidades do futuro.
		Desafios da energia nuclear
		
		A energia nuclear também tem alguns desafios, incluindo:
		
		Custo: A construção de usinas nucleares é um investimento caro.
		Segurança: Os acidentes nucleares podem causar danos significativos ao meio ambiente e à saúde humana.
		Descarte de resíduos: Os resíduos nucleares são perigosos e precisam ser armazenados com segurança por milhares de anos.
		Conclusão
		
		A energia nuclear é uma fonte de energia com um grande potencial para nos ajudar a enfrentar os desafios do mundo moderno. No entanto, é importante considerar os desafios da energia nuclear antes de tomar uma decisão sobre seu uso.
		
		Recomendações
		
		Para minimizar os riscos da energia nuclear, é importante:
		
		**Investir em pesquisa e desenvolvimento para melhorar a segurança das usinas nucleares.
		**Desenvolver tecnologias para o tratamento e o armazenamento de resíduos nucleares.
		Desenvolver um plano para a transição para fontes de energia renováveis, como a energia solar e eólica.
		A energia nuclear pode ser uma parte importante da solução para os desafios do mundo moderno. Com o investimento adequado em segurança e tecnologia, a energia nuclear pode nos ajudar a construir um futuro mais sustentável e justo para todos.`,
		description:
		  'A energia nuclear é uma fonte de energia limpa e eficiente que tem o potencial de nos ajudar a enfrentar alguns dos desafios mais urgentes do mundo, como a mudança climática e a pobreza.',
		published: true,
		imageUrl: 'https://images.unsplash.com/photo-1591200834528-4050ce99fe78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
	 },
 });


  console.log('Informações gravadas com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
 
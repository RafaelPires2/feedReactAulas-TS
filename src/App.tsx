import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/rafaelpires2.png',
      name: 'Rafael Pires',
      role: 'Front-End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-28 10:24:14')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/rafaelpires.png',
      name: 'Renan',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Salve, salve!!! 👋'},
      { type: 'paragraph', content: 'Acabei de criar um novo projeto, onde trago uma biblia online 🚀'},
      { type: 'link', content: 'bibliaonline.com'}
    ],
    publishedAt: new Date('2022-09-26 20:24:14')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        
        </main>

      </div>
    </div>
  )
}


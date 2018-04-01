import Home from './components/Home'
import Lessons from './components/Lessons'
import Lesson from './components/Lesson'

export default {
  Home: {path: '/', component: Home},
  Lessons: {
    path: '/lessons',
    components: {
      default: Lesson,
      sidebar: Lessons
    }
  }
}

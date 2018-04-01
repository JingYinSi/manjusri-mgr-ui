import Home from './components/Home'
import LessonDetailsBase from './components/LessonDetailsBase'
import LessonDetailsStatistics from './components/LessonDetailsStatistics'
import LessonDetails from './components/LessonDetails'
import LessonList from './components/LessonList'

export default {
  Home: {path: '/', component: Home},
  Lessons: {
    path: '/lessons',
    components: {
      default: LessonList,
      sidebar: LessonDetails
    }
  },
  LessonDetails: {
    path: '/lessons/:id',
    component: LessonDetails,
    children: [
      {
        path: 'base',
        component: LessonDetailsBase
      },
      {
        path: 'statistics',
        component: LessonDetailsStatistics
      }
    ]
  }
}

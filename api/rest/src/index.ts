import { fooApplication } from 'application'
import { fooEntities } from 'entities'

export const fooAPI = () => {
  console.log('fooAPI')
  fooApplication()
  fooEntities()
}

fooAPI()

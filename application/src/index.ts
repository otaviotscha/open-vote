import { fooEntities } from 'entities'
import { fooRepositories } from 'repositories'

export const fooApplication = () => {
  console.log('fooApplication')
  fooEntities()
  fooRepositories()
}

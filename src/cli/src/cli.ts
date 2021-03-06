import New from './cli/init'
import Add from './cli/add'
import Build from './cli/build'
import Watch from './cli/watch'
import Server from './cli/server'
import Help from './cli/help'

export default {
  new: New.run,
  add: Add.run,
  build: Build.run,
  watch: Watch.run,
  server: Server.run,
  help: Help.run
}
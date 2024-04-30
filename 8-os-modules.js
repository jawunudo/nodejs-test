const os = require('node:os')
// Info about current user 
const user = os.userInfo()
console.log(user)

// Info about system uptime in seconds
console.log(`The system uptime is ${os.uptime()} secomds.`)

const currentOS = {
	name: os.type(),
	release: os.release(),
	cpus: os.cpus(),
	freemem: os.freemem(),
	totalmem: os.totalmem(),
	homedir: os.homedir(),
	hostname: os.hostname(),
	machine: os.machine(),
	platform: os.platform(),
	release: os.release(),
}

console.log(currentOS)

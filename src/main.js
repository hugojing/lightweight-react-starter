import Routes from './router'
import ReactDOM from 'react-dom'
import styles from './styles/global.css'
window.HOST = 'https://api.server.addr'

main()

function main() {
	ReactDOM.render(Routes, document.getElementById('app'))
}

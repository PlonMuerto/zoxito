import Header from "./Header";
import '@styles/containers/layout.scss'

export default function Layout({ children, locale }){
	return (
		<div className="Layout">
            <Header />
			{children}
			<figure className="glitchSystem">
				
				<img src={"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTRhYWQ0ZWU3NWU4NWEyZTkyNTcyZjllODBhMDc5YjJjZjhhNTAxNiZjdD1n/DS42gDdzDnScE/giphy.gif"} alt="COCODRILOOOOOOOOO" />
			</figure>
		</div>
	);
};
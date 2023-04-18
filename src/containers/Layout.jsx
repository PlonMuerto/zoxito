import Header from "./Header";
import '@styles/containers/layout.scss'

export default function Layout({ children, locale }){
	return (
		<div className="Layout">
            <Header />
			{children}
			<figure className="glitchSystem">
				
				<img src={"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjg3ZjM1YTlhNDM0MTU3NjAyMjFlOTVjY2E2OGVkYzZkZTI1NzViNSZjdD1n/IPFz7kGsj5tqU/giphy.gif"} alt="COCODRILOOOOOOOOO" />
			</figure>
		</div>
	);
};
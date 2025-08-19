import logoBackground from "@/assets/images/logos/logo-background.png";
import logoForeground from "@/assets/images/logos/logo-foreground.png";
import "@/assets/css/loading/loading.css";

function Loading() {
	return (
		<div className="loading">
			<img className="rotating" src={logoBackground}/>
			<img className="foreground" src={logoForeground}/>
		</div>
	)
}

function FullscreenLoading() { 
	return (
		<div className="fullscreen-loading">
			<div className="loading">
				<img className="rotating" src={logoBackground}/>
				<img className="foreground" src={logoForeground}/>
			</div>
		</div>
	)
}

export {Loading, FullscreenLoading}
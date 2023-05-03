import "./Headers.css";
import Logo from "../../img/logo_welbex.svg";
import Telegram from "../../img/telegram.svg";
import Viber from "../../img/viber.svg";
import Whatsapp from "../../img/whatsapp.svg";

function Headers(isDesktop) {
	return (
		<section className="header-container">
			{isDesktop.isDesktop ? (
				<div>
					<a href="">
						<img src={Logo} className="header-logo" alt="Logo"></img>
					</a>
					<p className="header-logo-description">
						крупный интегратор CRM в Росcии и ещё 8 странах
					</p>
				</div>
			) : (
				""
			)}

			<ul className="header-list">
				<li className="header-list-item">
					<a className="header-list-item-link" href="">
						Услуги
					</a>
				</li>
				<li className="header-list-item">
					<a className="header-list-item-link" href="">
						Виджеты
					</a>
				</li>
				<li className="header-list-item">
					{" "}
					<a className="header-list-item-link" href="">
						Интеграции
					</a>
				</li>
				<li className="header-list-item">
					<a className="header-list-item-link" href="">
						Кейсы
					</a>
				</li>
			</ul>
			{isDesktop.isDesktop && (
				<ul className="header-list">
					<li className="header-list-item">
						<a className="header-list-item-link" href="">
							+7 555 555-55-55
						</a>
					</li>
					<li className="header-list-item">
						<a className="header-list-item-link" href="">
							<img src={Telegram} alt="Telegram" />
						</a>
					</li>
					<li className="header-list-item">
						<a className="header-list-item-link" href="">
							<img src={Viber} alt="Viber" />
						</a>
					</li>
					<li className="header-list-item">
						<a className="header-list-item-link" href="">
							<img src={Whatsapp} alt="Whatsapp" />
						</a>
					</li>
				</ul>
			)}
		</section>
	);
}

export default Headers;

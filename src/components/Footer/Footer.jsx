import "./footer.css";

import Telegram from "../../img/telegram.svg";
import Viber from "../../img/viber.svg";
import Whatsapp from "../../img/whatsapp.svg";

function Footer(isDesktop) {
	return (
		<section className="footer-container">
			<ul className="footer-list">
				<h3 className="footer-list-title">о компании</h3>
				<li className="footer-list-item">
					<a href="" className="footer-list-item-link">
						Партнёрская программа
					</a>
				</li>
				<li className="footer-list-item">
					<a href="" className="footer-list-item-link">
						Вакансии
					</a>
				</li>
			</ul>
			{isDesktop.isDesktop ? (
				<>
					<ul className="footer-list">
						<h3 className="footer-list-title">меню</h3>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Расчёт стоимости
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Услуги
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Виджеты
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Интеграции
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Наши клиенты
							</a>
						</li>
					</ul>
					<ul className="footer-list">
						<h3 className="footer-list-title"></h3>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Кейсы
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Благодарственные письма
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Сертификаты
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Блог на Youtube
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Вопрос / Ответ
							</a>
						</li>
					</ul>
				</>
			) : (
				<div className="footer-mobile-container">
					<ul className="footer-list">
						<h3 className="footer-list-title">меню</h3>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Расчёт <br /> стоимости
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Услуги
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Виджеты
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Интеграции
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Наши клиенты
							</a>
						</li>
					</ul>
					<ul className="footer-list">
						<h3 className="footer-list-title">
							<span className="footer-list-hiden-title">Hiden</span>
						</h3>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Кейсы
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Благодарность <br /> клиентов
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Сертификаты
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Блог на Youtube
							</a>
						</li>
						<li className="footer-list-item">
							<a href="" className="footer-list-item-link">
								Вопрос / Ответ
							</a>
						</li>
					</ul>
				</div>
			)}

			<ul className="footer-list footer-list_last">
				<h3 className="footer-list-title">контакты</h3>
				<li className="footer-listitem footer-list_last-item">
					<a href="" className="footer-list-item-link">
						<span className="footer-list-item-link_cancel_rules_font">
							+7 555 555-55-55
						</span>
					</a>
				</li>
				<li className="footer-list-item footer-list_last-item">
					<a href="" className="footer-list-item-link">
						<img src={Telegram} alt="телеграмм" />
					</a>
					<a href="" className="footer-list-item-link">
						<img src={Viber} alt="телефон" />
					</a>
					<a href="" className="footer-list-item-link">
						<img src={Whatsapp} alt="ватсапп" />
					</a>
				</li>

				<li className="footer-list-item footer-list_last-item">
					<a href="" className="footer-list-item-link">
						Москва, Путевой проезд 3с1, к 902
					</a>
				</li>
				<li className="footer-list-item footer-list_last-description">
					©WELBEX 2022. Все права защищены.
				</li>
				<li className="footer-list-item footer-list_last-link">
					<a href="" className="footer-list-item-link">
						Политика конфиденциальности
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Footer;

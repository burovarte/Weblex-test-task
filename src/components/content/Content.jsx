import "./Content.css";

function Content(isDesktop) {
	return (
		<section className="container">
			<div>
				<h1 className="left-side-title">
					Зарабатывайте больше
					<br />
					<span className="text-name"> c WELBEX</span>
				</h1>
				<p className="left-side-description">
					Развиваем и контролируем продажи за вас
				</p>
			</div>
			<div className="container-right">
				<h2 className="right-side-title">
					Вместе c<span className="text-name text-name-upper"> бесплатной</span>
					<br />{" "}
					<span className="text-name text-name-upper"> консультацией</span> мы
					дарим:
				</h2>
				{isDesktop.isDesktop ? (
					<>
						<ul className="right-side-list-container">
							<li>
								<h3 className="list-item-title">Виджеты</h3>
								<p className="list-item-description">
									30 готовых <br /> решений
								</p>
							</li>
							<li>
								<h3 className="list-item-title">Dashboard</h3>
								<p className="list-item-description">
									c показателями <br /> вашего бизнеса
								</p>
							</li>
							<li>
								<h3 className="list-item-title">Skype Аудит</h3>
								<p className="list-item-description">
									отдела продаж <br /> и CRM системы
								</p>
							</li>
							<li>
								<h3 className="list-item-title">35 дней</h3>
								<p className="list-item-description">
									использования <br /> CRM
								</p>
							</li>
						</ul>
						<button className="content-button">Получить консультацию</button>{" "}
					</>
				) : (
					<>
						<ul className="right-side-list-container">
							<li>
								<h3 className="list-item-title">
									<span className="list-container-item-title-line">–</span>{" "}
									Skype Аудит
								</h3>
							</li>
							<li>
								<h3 className="list-item-title">
									<span className="list-container-item-title-line">–</span>{" "}
									Dashboard
								</h3>
							</li>
							<li>
								<h3 className="list-item-title">
									<span className="list-container-item-title-line">–</span> 30
									Виджетов
								</h3>
							</li>
							<li>
								<h3 className="list-item-title">
									<span className="list-container-item-title-line">–</span>{" "}
									месяц amocrm
								</h3>
							</li>
						</ul>
					</>
				)}
			</div>
		</section>
	);
}

export default Content;

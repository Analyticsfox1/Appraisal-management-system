import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class AboutUs extends Component {
	render() {
		return (
			<div className="about-page">
				<Header />
				<section className="about-section w3-aboutbg" />
				<section className="mb-5">
					<div className="container">
						<h3 className="w3-center mt-5 title-orange">About US</h3>
						<p className="mt-4 text-justify title-blue">AnalyticsFox is a professionally managed Software Development & Consulting Company with a passion for innovation. The company was designed to bridge the gap between customers and the latest technology that leads to organizational transformation and provide competitive advantage to them. Our mission is to smartly create value for our clients, consistently providing optimal solutions with our insight and innovation that helps them build and achieve excellence and sustainability. As a company we focus on maintaining and compliance in everything we do, we believe in delivering robust solutions quickly and efficiently at lower cost. We respect deadlines, understand budgets, and stand by everything we develop.</p>
						<h5 className="title-blue mt-5">Make your people feel valued</h5>
						<ul className="mt-3">
							<li>To be fully satisfied and competent employees need to feel that they’re valued and are producing good work. The formal appraisal is a great opportunity to give your employees sincere feedback, spurring them on to work smarter and better.</li>
							<br />
							<li>Employees really value frequent praise and recognition, so letting them know you are aware of the good work that they’re doing will help you to retain hard-working staff. Your team will also value your expert advice on their personal brand, and what key areas they should be focusing on strengthening.</li>
						</ul>

						<h5 className="title-blue mt-5">Set new goals</h5>
						<ul className="mt-3">
							<li>The most productive employees are those that are constantly driven, and unrelenting in their pursuit of goals. Setting achievable targets during the appraisal helps to motivate employees, and empowers them to feel more confident when they hit them.</li>
							<br />
							<li>Setting achievable targets during the appraisal helps to motivate employees
								The appraisal is also a useful occasion to realign business objectives with changing market conditions; making targets relevant and accurate. For instance, during a particularly stagnant period of nationwide growth you may wish to reign in your forecasts to avoid disappointment.</li>
						</ul>

						<h5 className="title-blue mt-5">Resolve grievances</h5>
						<ul className="mt-3">
							<li>Often managers are too engrossed in the day-to-day to get an insight into an employee’s frame of mind. The appraisal is a great time to address any concerns you or they may have.</li>
						</ul>

						<h5 className="title-blue mt-5"> Refocusing your team</h5>
						<ul className="mt-3">
							<li>This is your chance to clarify and articulate your vision
Appraisals can be used to help communicate your vision to team members. This is your chance to clarify and articulate your vision, ensuring that everyone is singing from the same hymn sheet.</li>
							<br />
							<li>It’s also an opportunity to manage employees’ promotion expectations. Those with an inflated idea of their own abilities and role within the business will benefit from a realistic assessment of their current worth.</li>
						</ul>

					</div>
				</section>
				<Footer />
			</div>
		)
	}
}

export default AboutUs
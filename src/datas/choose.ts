import diverse_invest_option from '../assets/why/diverser-investment-options.webp'
import low_cost_high_returns from '../assets/why/low-cost-high-returns.webp'
import real_time_insights from '../assets/why/real-time-insights.webp'
import robust_security from '../assets/why/robust-security.webp'
import simplified_investing from '../assets/why/simplified-investing.webp'
import user_friendly from '../assets/why/user-friendly.webp'

export type ChooseItem = {
    id: number;
    title: string;
    description: string;
    img: string
}

const Choose: ChooseItem[] = [{
    id: 1,
    img: diverse_invest_option,
    title: "Diverse Investment Options",
    description: "Whether you're interested in mutual funds, stocks, IPOs, or digital gold, we've got it all under one roof. Choose from a wide range of investment options to diversify your portfolio and optimize your earnings."
},
{
    id: 2,
    img: simplified_investing,
    title: "Simplified Investing",
    description: "With Paytm Money, you're just a few clicks away from accessing the world of investment opportunities. We've simplified the entire investing process, making it effortless and accessible for everyone, whether you're a novice or a seasoned investor."
}
    , {
    id: 3,
    img: real_time_insights,
    title: "Real-Time Insights",
    description: "Stay ahead of the game with real-time market data, stock performance, and comprehensive insights. Make informed investment decisions with the latest news and trends at your fingertips."
}
    , {
    id: 4,
    img: user_friendly,
    title: "User-Friendly App",
    description: "Our intuitive mobile app ensures a seamless investing experience. No jargon, no complications—just an easy, user-friendly interface to manage your investments on the go."
}
    , {
    id: 5,
    img: robust_security,
    title: "Robust Security",
    description: "We take the security of your investments seriously. Your data and transactions are protected with cutting-edge encryption and security protocols."
}
    , {
    id: 6,
    img: low_cost_high_returns,
    title: "Low Costs, High Returns",
    description: "We understand the value of your hard-earned money. That's why we offer some of the lowest transaction charges in the industry, ensuring that you maximize your returns."
}
]
export default Choose
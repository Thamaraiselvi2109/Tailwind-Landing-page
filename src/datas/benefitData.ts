export type BenefitItem = {
    id: number;
    title: string;
    description: string;
  }
const Benefit:BenefitItem[] = [
    {
        id: 1,
        title : "Fully digital account opening",
        description : "No more complicated jargon or endless paperwork, experience 100% paperless account opening process with Paytm Money."
    },
    {
        id: 2,
        title : "Easy & Convenient",
        description : "Paytm Money offers a hassle-free and user-friendly platform, making investing as simple as a few taps on your smartphone."
    },
    {
        id: 3,
        title : "Variety of Investment Options",
        description : "Explore a diverse range of mutual funds, equities, IPOs, and more. Whether you're a seasoned investor or just starting out, there's an option for everyone."
    },
    {
        id: 4,
        title : "Secure & Trusted",
        description : "Paytm Money is a part of the Paytm Group, one of India's most trusted brands. Your investments are safeguarded with the highest security standards."
    },
    {
        id: 5,
        title : "Expert Insights",
        description : "Gain access to expert research, insights, and recommendations to make informed investment decisions."
    },
    {
        id: 6,
        title : "Zero Maintenance",
        description : "Enjoy a maintenance-free investing experience."
    },
    {
        id: 7,
        title : "Zero commission Direct Mutual Funds",
        description : "Enjoy a commission-free investing experience. Every rupee you invest goes to work for you."
    }
]

export default Benefit;
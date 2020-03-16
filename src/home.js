import React, { useState } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Welcome from './components/home/welcome';
import Portfolio from './components/home/portfolio';
import Info from './components/home/info';
import Action from './components/home/action';

const Home = props => {
    const [state, setState] = useState({
        galery: [
            {
                id: 1,
                url: 'https://picsum.photos/seed/people/1900/1080',
                title: 'First Slide',
                description: 'This is a description for the first slide'
            },
            {
                id: 2,
                url: 'https://picsum.photos/seed/animals/1900/1080',
                title: 'Second Slide',
                description: 'This is a description for the second slide'
            },
            {
                id: 3,
                url: 'https://picsum.photos/seed/nature/1900/1080',
                title: 'Third Slide',
                description: 'This is a description for the third slide'
            }

        ],
        WelcomeInfo: {
            title: 'Welcome to Modern Business',
            cardInfo: [
                {
                    id: 1,
                    title: 'Card Title',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                    button: {
                        label: 'Learn More',
                        url: '/#'
                    }
                },
                {
                    id: 2,
                    title: 'Card Title',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                    button: {
                        label: 'Learn More',
                        url: '/#'
                    }
                },
                {
                    id: 3,
                    title: 'Card Title',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
                    button: {
                        label: 'Learn More',
                        url: '/#'
                    }
                }
            ]
        },
        PortfolioInfo: {
            title: 'Portfolio Heading',
            cardInfo: [
                {
                    id: 1,
                    title: 'Project',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
                    url: 'https://picsum.photos/id/100/700/400'
                },
                {
                    id: 2,
                    title: 'Project',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
                    url: 'https://picsum.photos/id/200/700/400'
                },
                {
                    id: 3,
                    title: 'Project',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
                    url: 'https://picsum.photos/id/300/700/400'
                },
                {
                    id: 4,
                    title: 'Project',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
                    url: 'https://picsum.photos/id/400/700/400'
                },
                {
                    id: 5,
                    title: 'Project',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
                    url: 'https://picsum.photos/id/500/700/400'
                },
                {
                    id: 6,
                    title: 'Project',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!',
                    url: 'https://picsum.photos/id/600/700/400'
                }
            ]
        },
        ModernInfo: {
            title: 'Modern Business Features',
            description: 'The Modern Business template by Start Bootstrap includes:',
            url: 'https://picsum.photos/id/100/700/450',
            description2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.',
            list: [
                <strong>Bootstrap v4</strong>,
                'jQuery',
                'Font Awesome',
                'Working contact form with validation',
                'Unstyled page elements for easy customization'
            ]
        },
        ActionInfo: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.',
            button: {
                title: 'Call to Action',
                url: '/#'
            }
        }
    })
    return (
        <>
            <Navbar />

            <Header slide={state.galery} />

            <div className="container">

                <Welcome info={state.WelcomeInfo}/>

                <Portfolio info={state.PortfolioInfo}/>

                <Info info={state.ModernInfo}/>

                <hr />

                <Action info={state.ActionInfo} />

            </div>
            <Footer />
        </>
    )
}

export default Home;
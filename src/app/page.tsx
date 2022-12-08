'use client'
import React from 'react';
import MouseDownLink from '../components/MouseDownLink';

const HomePage = (props: any) => {
  return (
    <>
      <div id="transition--container">
        <p className="loading--text" id="loading--text">One moment...</p>
      </div>

      <div id="canvas"></div>

      <main id="main--content--outer--container">
        <div id="main--content--inner--container" className="homepage">
          <div id="homepage--welcome--text--inner--container" className="disable--selection">
            <h1 id="main--content--title" className=""> Welcome to the Infinite Garden</h1>
            <MouseDownLink href="/infinitegarden" id="next--page--navigation--container">
              <svg id="downward--arrow" width="30" height="43" viewBox="0 0 58 43" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.9865 1.12905C57.9942 1.08271 57.9961 1.03636 57.9981 0.988083C58 0.914701 57.9942 0.84325 57.9807 0.771799C57.975 0.742832 57.9807 0.715796 57.973 0.688761C57.9673 0.66945 57.9518 0.654001 57.9441 0.63469C57.921 0.567101 57.8844 0.505306 57.8459 0.44351C57.8189 0.401026 57.7958 0.358541 57.7631 0.32185C57.7554 0.312195 57.7515 0.300608 57.7438 0.290952C57.7034 0.248468 57.6514 0.221433 57.6051 0.186673C57.5666 0.157706 57.5339 0.124877 57.4915 0.101704C57.3952 0.0514949 57.2931 0.0186661 57.1871 0.00321721C57.1563 -0.000645009 57.1255 0.00321721 57.0928 0.0012861C56.9984 -0.00257612 56.904 0.0012861 56.8115 0.0263905C56.8019 0.0283216 56.7923 0.0263905 56.7807 0.0283216L29.001 8.0656L1.21736 0.0283216C1.20581 0.0244594 1.19617 0.0283216 1.18462 0.0263905C1.09794 0.00321721 1.01126 -0.000645009 0.922653 0.0012861C0.880276 0.0012861 0.8379 0.0012861 0.795523 0.00707943C0.69536 0.0225283 0.597124 0.053426 0.506592 0.101704C0.468068 0.122946 0.437249 0.153844 0.402577 0.178948C0.352496 0.213708 0.298562 0.242675 0.256185 0.289021C0.246554 0.298677 0.242702 0.310264 0.234997 0.32185C0.204178 0.35661 0.18299 0.399095 0.156023 0.439648C0.115572 0.503374 0.0789745 0.56517 0.0539338 0.63469C0.046229 0.654001 0.0308193 0.667519 0.0250407 0.688761C0.0173359 0.717727 0.0250407 0.744763 0.0173359 0.771799C0.00385241 0.84325 0 0.914701 0 0.988083C0 1.03636 0.00385241 1.08271 0.0115572 1.12905C0.0231145 1.19471 0.0462289 1.25651 0.0731958 1.32023C0.0924579 1.36851 0.109794 1.41486 0.136761 1.45927C0.144465 1.47279 0.146392 1.48824 0.156023 1.49983L28.2074 42.5784C28.2074 42.5784 28.217 42.5861 28.2208 42.59C28.2382 42.6151 28.2671 42.6267 28.2883 42.6498C28.3923 42.7696 28.5156 42.8584 28.66 42.9144C28.6831 42.924 28.6947 42.9472 28.7178 42.9549C28.8122 42.9858 28.9085 42.9974 29.001 42.9974C29.0934 42.9974 29.1917 42.9839 29.2841 42.9549C29.3072 42.9472 29.3188 42.924 29.3419 42.9144C29.4864 42.8584 29.6096 42.7715 29.7137 42.6498C29.7348 42.6267 29.7637 42.6151 29.7811 42.59C29.7849 42.5842 29.7907 42.5842 29.7946 42.5784L57.844 1.50176C57.8536 1.48824 57.8555 1.47279 57.8632 1.4612C57.8902 1.41679 57.9075 1.37044 57.9268 1.32216C57.9538 1.25844 57.9769 1.19664 57.9884 1.13098L57.9865 1.12905ZM29.001 10.0353C29.0915 10.0353 29.182 10.0218 29.2687 9.99671L50.5687 3.83647L29.001 17.1997L7.4313 3.83647L28.7332 9.99864C28.8199 10.0237 28.9104 10.0373 29.001 10.0373V10.0353ZM28.0379 18.8721V38.9131L4.31663 4.17634L28.0359 18.8721H28.0379ZM29.9641 38.9131V18.874L53.6814 4.17634L29.9641 38.9151V38.9131Z" fill="white" />
              </svg>
              <p className="next--page--text"> Explore </p>
            </MouseDownLink>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage;
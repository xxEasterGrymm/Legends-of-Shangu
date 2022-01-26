import React, { PureComponent } from 'react'

const FAQ = () => {
    const toggleText = (elementId) => {
      const text = document.getElementById(elementId + '-text');
      const svg = document.getElementById(elementId + '-svg');
      if(text.style.maxHeight !== '500px') {
        text.style.overflow = 'auto';
        text.style.maxHeight = '500px';
        text.style.visibility = 'visible';
        text.style.opacity = 1;
        svg.style.transform = 'translateY(-50%) rotate(45deg)';
      }
      else {
        text.style.overflow = 'none';
        text.style.maxHeight = 0;
        text.style.visibility = 'hidden';
        text.style.opacity = 0;
        svg.style.transform = 'translateY(-50%)';
      }
    };
    return (
      <div id="faq">
        <h3>FAQ</h3>
        <div
          id="what"
          onClick={() => {
            toggleText('what');
          }}
        >
          <h4>What are the Legends of Shangu?</h4>
          <svg
            id="what-svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.66699V20.3337"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.6665 11H20.3332"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div id="what-text">
            <p>
              Legends of Shangu is an exclusive NFT project featuring 8,888 unique
              apes that have a combined mixture of rare and authentic art, backed
              by a special Utility for holders. We are creating an unmatched
              community where holders have the opportunity to not only meet up in
              person, but also in the Metaverse where they have the potential to
              earn additional crypto assets!
            </p>
          </div>
        </div>
        <div
          id="when"
          onClick={() => {
            toggleText('when');
          }}
        >
          <h4>When is the release date?</h4>
          <svg
            id="when-svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.66699V20.3337"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.6665 11H20.3332"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div id="when-text">
            <p>
              The Legends of Shangu Collection will officially release to the
              public on November 10th. Pre Sale begins November 8th. For more
              information join our{' '}
              <a
                href=""
                rel="noreferrer"
                target="_blank"
              >
                Discord
              </a>
              !
            </p>
          </div>
        </div>
        <div
          id="where"
          onClick={() => {
            toggleText('where');
          }}
        >
          <h4>Where can I buy a Legend?</h4>
          <svg
            id="where-svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.66699V20.3337"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.6665 11H20.3332"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div id="where-text">
            <p>
              Minting will be available through our official website and smart
              contract address only. (Official smart contract will be provided by
              our team on launch day in our{' '}
              <a
                href=""
                rel="noreferrer"
                target="_blank"
              >
                Discord
              </a>
              !) On minting day, you will be able to purchase a Legend at a
              cost of 0.075 ETH. This can change depending on the price of ETH
              during launch. Once minting is over, you’ll be able to showcase on
              your OpenSea account.
            </p>
          </div>
        </div>
        <div
          id="how"
          onClick={() => {
            toggleText('how');
          }}
        >
          <h4>What makes us different?</h4>
          <svg
            id="how-svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.66699V20.3337"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.6665 11H20.3332"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div id="how-text">
            <p>
              We’ve worked with some of the best artists and developers for over
              the last 2 months to create unique and authentic pieces of art. What
              makes this project really unique and special is the utility behind
              it! Be sure to check out our roadmap and White paper.
            </p>
          </div>
        </div>
        <div
          id="who"
          onClick={() => {
            toggleText('who');
          }}
        >
          <h4>Who is the team?</h4>
          <svg
            id="who-svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1.66699V20.3337"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.6665 11H20.3332"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div id="who-text">
            <p>
              We have a very great team from serial entrepreneurs, to marketing
              experts, top designers, video game developers, NFT advisors, and
              great community managers. Join our official{' '}
              <a
                href=""
                rel="noreferrer"
                target="_blank"
              >
                Discord
              </a>{' '}
              to learn more about us!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQ;
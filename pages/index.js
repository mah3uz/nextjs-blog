import Link from 'next/link';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { getPosts } from '../utils/mdx-utils';


export default function Index({ posts, globalData }) {
  return (
    <>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <div className="min-h-screen bg-yellow-100/70 antialiased">
        <div className="mx-auto max-w-md md:max-w-screen-lg">
          <nav className="flex flex-wrap items-center justify-center gap-4 pt-7 md:justify-between md:gap-0 md:pt-4">
            <div>
              <ul className="mt-7 flex justify-between text-gray-500 md:text-xl">
                <li className="mx-5 h-7 transition hover:border-b-2 hover:border-red-400">
                  <Link href="/"><a>Home</a></Link>
                </li>
                <li className="mx-5 h-7 transition hover:border-b-2 hover:border-red-400">
                  <Link href="#about"><a>ABOUT</a></Link>
                </li>
                <li className="mx-5 h-7 transition hover:border-b-2 hover:border-red-400">
                  <Link href="/blog"><a>BLOG</a></Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-between gap-4">
              <div >
                <a className="hover:text-gray-800" href="https://web.facebook.com/#">
                  <img className="w-6 hover:rounded-full hover:border-2 hover:border-yellow-500" src="https://www.linkpicture.com/q/icons8-facebook.svg" alt="facebook" />
                </a>
              </div>
              <div className="hover:text-gray-400">
                <a  href="https://twitter.com/#">
                  <img className="w-6 p-0.5 hover:rounded-full hover:border-2 hover:border-yellow-500" src="https://www.linkpicture.com/q/iconmonstr-twitter-1.svg" alt="" />
                </a>
              </div>
              <div className="hover:text-gray-400">
                <a href="https://www.instagram.com/#">
                  <img className="w-6 hover:rounded-full hover:border-2 hover:border-yellow-500" src="https://www.linkpicture.com/q/iconmonstr-instagram-14.svg" alt="" />
                </a>
              </div>
            </div>
          </nav>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:justify-between md:gap-0 md:pt-14">
            <div className="w-1/2 text-sky-900">
              <h3 className="pb-3 font-bold md:pb-14 md:text-lg">Hello, I’m HK Shemul,</h3>
              <h1 className="pb-4 text-5xl font-extrabold md:text-7xl">Social Worker & Enterprenuer</h1>
              <p className="md:text-2xl">based in Bangladesh.</p>
              <div className="mt-8">
                <a className="rounded border border-yellow-500 bg-yellow-200 px-4 py-2 text-yellow-600 shadow-lg shadow-yellow-200 hover:bg-yellow-300 md:px-6 md:py-3" href="#">Resume</a>
              </div>
            </div>
            <div className="border-4 border-yellow-300 p-4 rounded-full">
              <img className="w-52 rounded-full md:w-96" src="./img/me.jpeg" alt="Me" />
            </div>
          </div>

          <div id="about" className="flex flex-wrap items-center justify-center gap-4 pt-7 md:justify-between md:gap-0 md:pt-3">
            <div className="text-center md:text-left">
              <h1 className="my-20 text-7xl font-medium text-yellow-400">about</h1>
              <p className="mb-20 text-xl text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. <br />
                Id phasellus dui orci vulputat consequat nulla proin. Id sit scelerisque neque, <br />
                proin bibendum diam.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-7 md:justify-between md:gap-0 md:pt-3">
            <div>
              <ul className="text-center marker:text-3xl marker:text-gray-800 md:list-disc md:pl-40 md:text-left">
                <li className="mb-5">
                  <h4 className="mb-4 text-xl font-bold text-gray-800">2016-2018</h4>
                  <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</p>
                </li>
                <li className="mb-5">
                  <h4 className="mb-4 text-lg font-bold text-gray-800">2019-2020</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</p>
                </li>
                <li className="mb-5">
                  <h4 className="mb-4 text-lg font-bold text-gray-800">2022 - Present</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</p>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-7 md:justify-between md:gap-0 md:pt-3">
              <div className="text-center md:text-left">
                <h1 className="mb-10 text-7xl font-medium text-yellow-400">work.</h1>
                <p className="mb-20 text-xl text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. <br />
                  Id phasellus dui orci vulputat consequat nulla proin. Id sit scelerisque neque, <br />
                  proin bibendum diam.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-7 md:justify-between md:gap-0 md:pt-3">
              <div>
                <div className="max-w-40 flex flex-row px-2 md:max-w-lg">
                  <div className="flex-col overflow-hidden bg-white md:flex">
                    <div className="md:w-2xl h-56 bg-cover bg-bottom md:h-72"></div>
                    <div className="bg-amber-100 pt-6">
                      <div className="bg-amber-100 p-4 md:p-5">
                        <p className="text-md mb-4 font-black text-gray-700">November 24, 2019</p>
                        <p className="mb-4 text-2xl font-bold text-gray-800 md:text-xl">Some Case Study</p>
                        <p className="text-gray-700 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="max-w-40 flex flex-row px-2 md:max-w-lg">
                  <div className="flex-col overflow-hidden bg-white md:flex">
                    <div className="md:w-2xl h-56 bg-cover bg-bottom md:h-72"></div>
                    <div className="bg-amber-100 pt-6">
                      <div className="bg-amber-100 p-4 md:p-5">
                        <p className="text-md mb-4 font-black text-gray-700">November 24, 2019.</p>
                        <p className="mb-4 text-2xl font-bold text-gray-800 md:text-xl">Some Case Study</p>
                        <p className="text-gray-700 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d flex flex-wrap justify-center gap-4 pt-12 md:flex-col md:items-start md:gap-0 md:pt-12 md:pb-40">
            <div>
              <h1 className="mb-10 text-7xl font-medium text-yellow-400">contact.</h1>
            </div>
            <div>
              <div className="max-w-40 md:max-w-8xl px-2">
                <div className="flex-row overflow-hidden bg-white md:flex">
                  <div className="h-56 bg-cover bg-bottom md:h-auto md:w-11/12"></div>
                  <div className="text-center md:py-8 md:text-left">
                    <div className="md:px-6">
                      <p className="mb-4 text-2xl text-gray-900 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</p>
                      <div className="text-gray-700 md:text-lg">
                        <p ><a href="mail@mailnator.com">mail@mailnator.com</a></p>
                        <p ><a href="#">twitter.com/johndoe</a></p>
                        <p ><a href="#">behance.com/johndoe</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}

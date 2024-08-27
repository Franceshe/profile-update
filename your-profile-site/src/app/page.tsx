import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-serif">
      <div className="mb-8">
        <Image
          src="/profile.jpg"
          alt="Frances He Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">Frances He</h1>
      <p className="mb-4">
        I am Founder/CEO at Yolominds.Inc, where I&apos;m fortunate to work on building Seacows AMM, the world&apos;s first decentralized automated liquidity protocol for NFT. We provide guaranteed liquidity based on AI evaluated price, with a special focus on gamefi markets.
      </p>
      <p className="mb-4">
        With our team, I help set a broader vision for Yolominds and work to choose aligned research and development directions. At Yolominds, I&apos;ve done anything needed to ship results like Seacows AMM and to grow the team: starting new research areas, promoting and coaching managers, technical work for fundraising, starting the recruiting team, rolling out our first product, etc.
      </p>
      <p className="mb-8">
        My main focus is on the intersection of AI, blockchain, and decentralized finance, but most of my career has revolved around innovative applications of technology to solve complex problems. I&apos;m interested in how the dynamics of AI and blockchain development can shape outcomes for people, and I try to spend as much time as possible with ethics, safety, and policy considerations.
      </p>
      <h2 className="text-2xl font-bold mb-4">About Seacows NFT AMM Protocol</h2>
      <p className="mb-4">
        At <Link href="https://twitter.com/seacowsNFT" className="text-blue-600 hover:underline">@seacowsNFT</Link>, we are building Seacows NFT AMM protocol, which is &quot;Uniswap for NFT&quot;. It is the world&apos;s first effective peer-to-pool NFT AMM Protocol, which solves liquidity fragmentation by leveraging a constant product market maker (CPMM) price discovery mechanism. This mechanism has been modified to enable &quot;integer NFT liquidity add/withdraw&quot;.
      </p>
      <p className="mb-8">
        Visit our website: <Link href="https://seacows.trade" className="text-blue-600 hover:underline">seacows.trade</Link>
      </p>
      <h2 className="text-2xl font-bold mb-4">Some great Challenges I&apos;d love to help solve</h2>
      <p className="mb-4">
        <Link href="https://www.engineeringchallenges.org/challenges.aspx" className="text-blue-600 hover:underline">14 Grand Challenges</Link> for Engineering in the 21st Century identified by National Academy of Engineering, which to some extent represent the &quot;biggest pains&quot; that we are facing in the 21st century.
      </p>
      <h2 className="text-2xl font-bold mb-4">Some ideas I&apos;m looking to see built or build myself:</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>Software to decrease asymmetric information</li>
        <li>Knowledge engine</li>
        <li>Effective algorithm driven interests match service</li>
        <li>A one-to-one simulated platform of as mirror of realworld</li>
        <li>Cost effective distributed nuclear plants</li>
        <li>More electrification of transportation, as electric jets</li>
        <li>Cloud Robotics platform</li>
        <li>Cost effective brain computer interface (Good job Neurolink!)</li>
        <li>Auto CRISPR machine or application for synthetic biology [Nebula genomics]</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>Founder/CEO at Yolominds.Inc (November 2021 - Present)</li>
        <li>Founder/CEO at Beijing Weici Xinzhi Technology Co LTD (August 2021 - Present)</li>
        <li>Founder at SomerCloud Studio (August 2019 - August 2021)</li>
        <li>Engineering Lead at XPRIZE (September 2018 - September 2019)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>University of Illinois at Urbana-Champaign - Bachelor&apos;s Degree, Physics & Minor Computer Science (2013 - 2018)</li>
        <li>Chengdu Foreign Languages School (2007 - 2013)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>Business Strategy</li>
        <li>Rust (Programming Language)</li>
        <li>AI and Machine Learning</li>
        <li>Blockchain Technology</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <ul className="list-disc pl-5 mb-8">
        <li>
          Email: <Link href="mailto:hemedex@yolominds.io" className="text-blue-600 hover:underline">hemedex@yolominds.io</Link>
        </li>
        <li>
          LinkedIn: <Link href="https://www.linkedin.com/in/franceshe" className="text-blue-600 hover:underline">www.linkedin.com/in/franceshe</Link>
        </li>
        <li>
          GitHub: <Link href="https://github.com/Franceshe" className="text-blue-600 hover:underline">github.com/Franceshe</Link>
        </li>
        <li>
          Twitter: <Link href="https://x.com/0xhemedex" className="text-blue-600 hover:underline">x.com/0xhemedex</Link>
        </li>
      </ul>
    </div>
  );
}
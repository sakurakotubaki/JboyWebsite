export default function HeaderComponent() {
  return (
    <div>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className="w-10 h-10 rounded-full" src="https://cdn.pixabay.com/photo/2013/09/07/08/29/cat-179842_960_720.jpg" alt="Rounded avatar" />
      <span className="ml-3 text-xl">Jboy Hashimoto</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="https://zenn.dev/joo_hashi" className="mr-5 hover:text-gray-900">Zenn</a>
      <a href="https://note.com/jboysan/" className="mr-5 hover:text-gray-900">Note</a>
      <a href="https://findy-code.io/share_profiles/b0ohh3Bj6qNp0" className="mr-5 hover:text-gray-900">Findy</a>
      <a href="https://twitter.com/jboy83062526" className="mr-5 hover:text-gray-900">Twitter</a>
    </nav>
  </div>
</header>
    </div>
  )
}
const Promo = () => {
  return (
    <section className="xl:py-5 bg-black">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=277&href=https%3A%2F%2Fwww.facebook.com%2F61553240433180%2Fvideos%2F3628253807484643%2F&show_text=false&width=560&t=0"
        style={ { overflow: 'hidden', border: 0 } }
        className="object-cover w-full h-[40vw]"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </section>
  )
}

export default Promo

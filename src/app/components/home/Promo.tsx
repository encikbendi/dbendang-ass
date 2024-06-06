const Promo = () => {
  return (
    <section className="xl:pb-10 bg-black">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61553240433180%2Fvideos%2F895364928766493%2F&show_text=false&width=560&t=0"
        className="w-full h-[75vh] max-w-[1280px] mx-auto max-h-[720px] object-cover"
        scrolling="no"
        frameBorder="0"
        allow="autoplay clipboard-write encrypted-media picture-in-picture web-share"
        allowFullScreen={true}
      />
    </section>
  )
}

export default Promo

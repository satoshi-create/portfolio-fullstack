import Link from "next/link";

export default function Hero() {
  return (
    <section className={`parts-grid py-8`}>
      <div className="hero-grid">

        
      </div>
        <figure
          style={{ position: "relative", width: "100%", height: "80vh" }}
          className={styles.heroFigure}
      >
        <img src="/yorunoume"
          <Image
            src="/yorunoume.png"
            layout="fill"
            objectFit="cover"
            className={styles.heroImg}
            alt="hero-image"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
          />
        </figure>

        <div className={styles.title}>
          <h1>縁</h1>
          <h1>側</h1>
          <h1>工</h1>
          <h1>房</h1>
          <div className={styles.engawaline}>
            <div className={`${styles.line} ${styles.yoko}`}></div>
            <div className={`${styles.line} ${styles.tate}`}></div>
          </div>
        </div>
        <h2 className={`${styles.catch} ${styles.catch1}`}>MARGINAL</h2>
        <h2 className={`${styles.catch} ${styles.catch2}`}>DESIGN</h2>
        <SocialLinks value={{ styleUl: styles.heroLinks }} />
        <div className={styles.herobtn}>
          <Button
            value={{
              title: "作品を見る",
              path: "/graphics",
            }}
          />
        </div>
      </div>
    </section>
  );
}

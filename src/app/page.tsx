import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="club-title">
        <div className={styles.watermark} aria-hidden="true">
          <Image
            src="/branding/ol_emblem.png"
            alt=""
            fill
            sizes="(max-width: 900px) 80vw, 640px"
            priority
          />
        </div>

        <div className={styles.heroFrame}>
          <div className={styles.topBar} aria-hidden="true">
            <span>Members Only</span>
            <span>Research Desk</span>
          </div>

          <Image
            className={styles.seal}
            src="/branding/ol_emblem.png"
            alt="Off Label Social Club emblem"
            width={116}
            height={116}
            priority
          />

          <div className={styles.content}>
            <p className={styles.kicker}>OFF LABEL SOCIAL CLUB</p>
            <h1 id="club-title">The Right People Know Where To Look.</h1>
            <p className={styles.statement}>Research. Curiosity. Independent Thinking.</p>
          </div>

          <a
            className={styles.cta}
            href="https://offlabelresearch.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ENTER THE CLUB
          </a>

          <div className={styles.annotation} aria-hidden="true">
            <span>01</span>
            <span>Signal Over Noise</span>
          </div>
        </div>
      </section>

      <section className={styles.editorial} aria-label="Private index">
        <div className={styles.wordmarkWrap} aria-hidden="true">
          <Image
            src="/branding/ol_slogan.png"
            alt=""
            fill
            sizes="100vw"
          />
        </div>

        <div className={styles.editorialInner}>
          <div className={styles.indexCopy}>
            <p className={styles.eyebrow}>Private Index</p>
            <h2>
              <span>Not everything</span>
              <span>valuable is advertised.</span>
            </h2>
            <div className={styles.indexLines}>
              <p>For people who read beyond the headline.</p>
              <p>For people who ask one more question.</p>
              <p>For people who know where to look.</p>
            </div>
          </div>

          <div className={styles.indexVisual}>
            <Image
              className={styles.footerImage}
              src="/branding/ol-footer.png"
              alt="Open notebook with Off Label Social Club notes, card, and pen"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

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
            alt="Off Label Social Club"
            width={116}
            height={116}
            priority
          />

          <div className={styles.content}>
            <p className={styles.kicker}>OFF LABEL SOCIAL CLUB</p>
            <h1 id="club-title">The Right People Know Where To Look.</h1>
            <p className={styles.statement}>Research. Data. Independent Thinking.</p>
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

      <section className={styles.editorial} aria-label="Club principles">
        <div className={styles.wordmarkWrap} aria-hidden="true">
          <Image
            src="/branding/ol_slogan.png"
            alt=""
            fill
            sizes="100vw"
          />
        </div>

        <div className={styles.editorialInner}>
          <p className={styles.eyebrow}>Private Index</p>
          <h2>A quieter room for sharper conclusions.</h2>
          <div className={styles.columns}>
            <p>For people who read past the headline.</p>
            <p>For people who prefer primary data to consensus language.</p>
            <p>For people who understand that access is not the same as noise.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

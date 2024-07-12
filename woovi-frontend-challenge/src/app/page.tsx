import { Card } from "@mui/material";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card sx={{ maxWidth: 345, marginTop: '36px', boxShadow: 'none', border: 'none' }}>
        <Image src="/woovi_logo.png" alt="Woovi Logo" height={36.65} width={123.51} />
      </Card>
    </main>
  );
}

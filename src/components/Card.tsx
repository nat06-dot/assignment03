import styles from "./card.module.css";
import Image from "next/image";

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                    <Image src={'/img/image.png'}
                        alt='product picture'
                        fill={true}
                        style={{ objectFit: "cover" }}/>
                </div>
            <div className={styles.cardtext}>
                Car 1
            </div>
            
        </div>
    );
}
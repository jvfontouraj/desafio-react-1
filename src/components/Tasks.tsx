import { Info } from './Info'
import { Empty } from './Empty'
import styles from './Tasks.module.css'
import { List } from './List'

export function Tasks(){
    return(
        <div className={styles.tasks}>
            <div>
                <Info/>
            </div>
            <div>
                <Empty/>
            </div>
            {/* <div>
                <List/>
            </div> */}
        </div>
    )
}
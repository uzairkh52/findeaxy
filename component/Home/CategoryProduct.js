import Head from 'next/head'
import Image from 'next/image'
import { 
  ItemHeader,
  ItemGroup,
  Icon,
  ItemImage ,
  ItemContent,
  Container,
  GridColumn,
  StyleSheet,
  Item,  Button, Grid } from 'semantic-ui-react'

import Header from '@/component/Header'
import HeroSection from '@/component/HeroSection'
import { useSelector } from 'react-redux'
import styles from '../../styles/Home.module.css'


export default function CategoryProduct() {
  // const getWebUser = useSelector((state) => state.WebUserReducer);
  

  return (
    <>
        <section className={styles.CatSection + ' section-padding'}>
          <Container>
          <Grid stackable>
          <Grid.Row>
            <h2>Browse Products in list</h2>
          </Grid.Row>
          </Grid>
          <Grid columns='equal'>
            <Grid.Row>
              <GridColumn className={styles.iconCol}>
                <ItemGroup>
                  <Item className={styles.iconBox}>
                    <ItemImage size='tiny' className={styles.iconImage} src='/images/car_svg.svg' />
                    <ItemContent verticalAlign='middle'>
                      <ItemHeader>
                        Car
                      </ItemHeader>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </GridColumn>
              <GridColumn className={styles.iconCol}>
                <ItemGroup>
                  <Item className={styles.iconBox}>
                    <ItemImage size='tiny' className={styles.iconImage} src='/images/bike-icon.svg' />
                    <ItemContent verticalAlign='middle'>
                      <ItemHeader>
                        Bike
                      </ItemHeader>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </GridColumn>
              {/*  */}
              <GridColumn className={styles.iconCol}>
                <ItemGroup>
                  <Item className={styles.iconBox}>
                    <ItemImage size='tiny' className={styles.iconImage} src='/images/mobile-tablet.svg' />
                    <ItemContent verticalAlign='middle'>
                      <ItemHeader>
                        Mobile / Tablet
                      </ItemHeader>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </GridColumn>
              {/*  */}
              <GridColumn className={styles.iconCol}>
                <ItemGroup>
                  <Item className={styles.iconBox}>
                    <ItemImage size='tiny' className={styles.iconImage} src='/images/laptop.svg' />
                    <ItemContent verticalAlign='middle'>
                      <ItemHeader>
                        Laptop
                      </ItemHeader>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </GridColumn>
              {/*  */}
            </Grid.Row>
          </Grid>
          {/*  */}
          </Container>
        </section>
        {/*  */}
        <section className={styles.CatSection + ' section-padding'}>
          <Container>
          <Grid stackable>
          <Grid.Row>
            <h2>Browse Products in list</h2>
          </Grid.Row>
          </Grid>
          <Grid columns='equal'>
            <Grid.Row>
              
            </Grid.Row>
          </Grid>
          {/*  */}
          </Container>
        </section>
    </>
  )
}

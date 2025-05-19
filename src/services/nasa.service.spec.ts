/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-await-sync-query */
import { describe, test, beforeEach } from '@jest/globals';

import { NasaService } from './nasa.service';

describe('Nasa service tests', () => {
  let service: NasaService;

  beforeEach(() => {
    service = new NasaService();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Get Image by note', () => {
    test('Get today image',  async () => {
      const now = new Date()
      //Format yyyy-mm-dd
      const nowStr = now.toISOString().slice(0, now.toISOString().indexOf('T'))

      const todayImage = await service.getByDate(now)

      expect(todayImage).toBeDefined()
      if(todayImage){
        expect(todayImage.date).toBe(nowStr)
      }
    })
    test('Get tomorrow image', async () => {
      const now = new Date()
      //tomorrow = now(ms) + 24h * 60min/h * 60s/min * 1000ms/s
      const tomorrow = new Date(now.getTime() + (24 * 60 * 60 * 1000))

      const tomorrowImage = await service.getByDate(tomorrow)

      expect(tomorrowImage).toBeUndefined()
    })
    test('Get a past image', async () => {
      const date = new Date('2020-04-04')
      const dateStr = date.toISOString().slice(0, date.toISOString().indexOf('T'))

      const image = await service.getByDate(date)

      expect(image).toBeDefined()
      if(image){
        expect(image.date).toBe(dateStr)
      }
    })
    test('Get first image (1995-06-16)', async () => {
      const date = new Date('1995-06-16')
      const dateStr = date.toISOString().slice(0, date.toISOString().indexOf('T'))

      const image = await service.getByDate(date)

      expect(image).toBeDefined()
      if(image){
        expect(image.date).toBe(dateStr)
      }
    })
    test('Get a non-existing past image (1995-06-15)', async () => {
      const date = new Date('1995-06-15')

      const image = await service.getByDate(date)

      expect(image).toBeUndefined()
    })
  })

  describe('Get N random images', () => {
    test('Get one image', async () => {
      const n = 1

      const images = await service.getByNImages(n)

      expect(images.length).toBe(n)
    })
    test('Get ten images', async () => {
      const n = 10

      const images = await service.getByNImages(n)

      expect(images.length).toBe(n)
    })
    test('Get zero images', async () => {
      const n = 0

      const images = await service.getByNImages(n)

      expect(images.length).toBe(n)
    })
    test('Get -1 images', async () => {
      const n = -1

      const images = await service.getByNImages(n)

      expect(images.length).toBe(0)
    })
  })

  describe('Get images by range', () => {
    test('Get images between today and yesterday', async () => {
      const now = new Date()
      //yesterday = now(ms) - 24h * 60min/h * 60s/min * 1000ms/s
      const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000))
      //Format yyyy-mm-dd
      const nowStr = now.toISOString().slice(0, now.toISOString().indexOf('T'))
      const yesterdayStr = yesterday.toISOString().slice(0, yesterday.toISOString().indexOf('T'))

      const images = await service.getByDateRange(yesterday, now)

      expect(images.length).toBe(2)
      expect(images[0].date).toBe(yesterdayStr)
      expect(images[1].date).toBe(nowStr)
    })
    test('Get last week images', async () => {
      const now = new Date()
      //yesterday = now(ms) - 24h * 60min/h * 60s/min * 1000ms/s
      const lastWeek = new Date(now.getTime() - (6 * 24 * 60 * 60 * 1000))

      const images = await service.getByDateRange(lastWeek, now)

      expect(images.length).toBe(7)

      let currentDate = lastWeek

      images.forEach(image => {
        const expectedDateStr = currentDate.toISOString().slice(0, currentDate.toISOString().indexOf('T'))

        expect(image.date).toBe(expectedDateStr)

        currentDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000))
      })
    })
    test('Get images between today and tomorrow', async () => {
      const now = new Date()
      //yesterday = now(ms) - 24h * 60min/h * 60s/min * 1000ms/s
      const yesterday = new Date(now.getTime() + (24 * 60 * 60 * 1000))

      const images = await service.getByDateRange(yesterday, now)

      expect(images.length).toBe(0)
    })
  })
});

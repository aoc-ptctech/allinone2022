import { readLinesFromFile } from '../../common/fileUtil'
import { part2 } from './part'

describe('Day 3 test', () => {
  it('should work with example data', () => {
    // Arrange
    const expectedAnswer = parseInt(
      readLinesFromFile('assets/day3/part2/example-answer.txt')[0]
    )
    // Act
    const value = part2('assets/day3/part2/example.txt')
    // Assert
    expect(value).toEqual(expectedAnswer)
  })
})

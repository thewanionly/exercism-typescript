const VALID_NUMBER_LENGTH = 10
const VALID_NUMBER_WITH_COUNTRY_CODE_LENGTH = 11
const COUNTRY_CODE = '1'

export function clean(input: string): string | never {
  /** Invalid characters checking */
  // Check if input has letters
  if (/[a-zA-Z]/g.test(input)) throw new Error('Letters not permitted')

  // Check if input has punctuations
  if (/[,:;!?]/g.test(input)) throw new Error('Punctuations not permitted')

  // Remove all non-numeric characters
  let phoneNumber = input.replace(/[^\d]/g, '')

  /** Digit length checking */
  // less than 10 digit number
  if (phoneNumber.length < VALID_NUMBER_LENGTH) throw new Error('Incorrect number of digits')

  // more than than 11-digit number
  if (phoneNumber.length > VALID_NUMBER_WITH_COUNTRY_CODE_LENGTH)
    throw new Error('More than 11 digits')

  /** Country, Area  and Exchange code  checking */
  if (phoneNumber.length === VALID_NUMBER_LENGTH) {
    // 10-digit number, make it into 11-digit
    phoneNumber = COUNTRY_CODE + phoneNumber
  }

  const countryCode = phoneNumber[0]
  const areaCodeStart = phoneNumber[1]
  const exchangeCodeStart = phoneNumber[4]

  // invalid numbers
  if (countryCode !== COUNTRY_CODE) throw new Error('11 digits must start with 1')
  if (areaCodeStart === '0') throw new Error('Area code cannot start with zero')
  if (areaCodeStart === '1') throw new Error('Area code cannot start with one')
  if (exchangeCodeStart === '0') throw new Error('Exchange code cannot start with zero')
  if (exchangeCodeStart === '1') throw new Error('Exchange code cannot start with one')

  // valid number (remove country code)
  return phoneNumber.slice(1)
}

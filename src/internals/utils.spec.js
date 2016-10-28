import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import {
	checkResponseStatus,
	parseResponseToJSON,
	parseJWT,
	isDefined,
	parseQueryString,
	preventBadFacebookHash
	} from './utils'

describe('utils', () => {

	describe('checkResponseStatus()', () => {
		it('should return response', () => {
			const response = { status: 200 }
			expect(checkResponseStatus(response)).to.equal(response)
		})

		it('should throw error', () => {
			const response = { status: 400, statusText: 'broken response' }
			expect(() => checkResponseStatus(response)).to.throw(Error, /broken response/)
		})
	})


	describe('parseResponseToJSON()', () => {
		it('should return object', () => {
			let parsed = false
			const response = { json: () => { parsed = true }}
			parseResponseToJSON(response)
			expect(parsed).to.be.true
		})
	})

	describe('parseJWT()', () => {
		it('should parse valid JSON Web Token', () => {
			const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'
			const token = parseJWT(jwt)
			expect(token).to.have.property('header').that.is.an('object')
			expect(token).to.have.property('payload').that.is.an('object')
			expect(token).to.have.property('signature').that.is.an('string')
		})

		it('should return null for invalid token', () => {
			const brokenJWT = 'nR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIi'
			expect(() => { return parseJWT(brokenJWT) }).to.not.throw(Error)
			expect(parseJWT(brokenJWT)).to.be.null
		})

	})

	describe('isDefined()', () => {
		it('should return false for undefined', () => {
			throw new Error('not implemented yet')
		})

		it('should return false for null', () => {
			throw new Error('not implemented yet')
		})

		it('should return true for 0', () => {
			throw new Error('not implemented yet')
		})

		it('should return true for false', () => {
			throw new Error('not implemented yet')
		})

		it('should return true for object', () => {
			throw new Error('not implemented yet')
		})

		it('should return true for string', () => {
			throw new Error('not implemented yet')
		})

		it('should return true for number', () => {
			throw new Error('not implemented yet')
		})
	})

	describe('parseQueryString()', () => {
		it('should parse query string', () => {
			throw new Error('not implemented yet')
		})

		it('should return object for invalid', () => {
			throw new Error('not implemented yet')
		})
	})

	describe('should preventBadFacebookHash()', () => {
		it('should redirect removing messy facebook hash', () => {
			throw new Error('not implemented yet')
		})
	})

})
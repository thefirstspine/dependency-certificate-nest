import { describe, expect, beforeEach, it } from '@jest/globals';
import { CertificateGuard } from './certificate.guard';
import { Reflector } from '@nestjs/core';
import { createMock } from '@golevelup/ts-jest';
import { ExecutionContext } from '@nestjs/common';

describe('JwtAutthGuard', () => {
    let guard: CertificateGuard;
    let reflector: Reflector;

    beforeEach(() => {
        reflector = new Reflector();
        guard = new CertificateGuard();
    });

    it('should be defined', () => {
        expect(guard).toBeDefined();
    });
});

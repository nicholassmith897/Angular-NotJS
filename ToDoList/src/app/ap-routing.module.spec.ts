import { ApRoutingModule } from './ap-routing.module';

describe('ApRoutingModule', () => {
  let apRoutingModule: ApRoutingModule;

  beforeEach(() => {
    apRoutingModule = new ApRoutingModule();
  });

  it('should create an instance', () => {
    expect(apRoutingModule).toBeTruthy();
  });
});

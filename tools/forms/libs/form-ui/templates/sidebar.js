import { html } from 'da-lit';

export const sidebarTemplate = () => html`
  <div class="form-side-panel">
    <div class="form-side-panel-main">
      <div class="form-side-panel-header">
        <div class="form-side-panel-title-container">
          <span class="form-side-panel-title">Navigation</span>
          
        </div>
        <div class="form-side-panel-controls">
            <label class="nav-activatable-toggle-label" title="Hide optional groups" aria-label="Hide optional groups">
              <input type="checkbox" class="nav-activatable-toggle" />
              <span class="toggle-slider" aria-hidden="true"></span>
            </label>
          </div>
      </div>
      <div class="form-side-panel-content">
        <div class="form-navigation-tree">
          <div class="form-nav-active-indicator"></div>
        </div>
      </div>
    </div>
  </div>
`;

export default { sidebarTemplate };



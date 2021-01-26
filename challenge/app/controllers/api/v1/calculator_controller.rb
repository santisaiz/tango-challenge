module Api::V1
  class CalculatorController < ActionController::Base
    before_action :set_brackets, only: [:index,:create]
    skip_before_action :verify_authenticity_token

    # Get default brackets
    def index
      render json: @brackets
    end

    # POST execute income tax calculation
     def create
       result = []
       @brackets.each do |bracket|

         result.concat(income_params.select {|income| income > bracket.min && income <= bracket.max }.map{|value| [value,value*bracket.tax/100]})
       end

       render json:result.reject { |c| c.empty? }
     end


    #Get params, validate object name
    def income_params
      @assignments= params[:incomeList].to_unsafe_h.map {|id, value| value}
    end

    # Setting default brackets rules from assignment
    def set_brackets
      @brackets = Bracket.all
    end

  end
end